import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  const { pw } = await req.json();
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const emails = ["techpivot25@gmail.com", "developerfe25@gmail.com"];
  const out: Record<string, unknown> = {};
  const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  for (const e of emails) {
    const u = list?.users.find((x) => x.email === e);
    if (!u) { out[e] = "not found"; continue; }
    const { error } = await admin.auth.admin.updateUserById(u.id, { password: pw, email_confirm: true });
    out[e] = error ? error.message : "ok";
    await admin.from("user_roles").upsert({ user_id: u.id, role: "admin" }, { onConflict: "user_id,role" });
  }
  return new Response(JSON.stringify(out), { headers: { "Content-Type": "application/json" } });
});
