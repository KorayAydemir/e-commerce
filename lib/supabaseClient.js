import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://nbmtpibtzjdkarpsiulm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibXRwaWJ0empka2FycHNpdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3MjQ4NzQsImV4cCI6MjAwMTMwMDg3NH0.fKVfX-ZvxYsYyAej8YortOFyBgXC8gjovUG2lobHsw4"
);
