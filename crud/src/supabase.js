import { createClient } from "@supabase/supabase-js";
const supabaseUrl='https://derepykqwgbpzskfneth.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcmVweWtxd2dicHpza2ZuZXRoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTkyMTY2MSwiZXhwIjoyMDQxNDk3NjYxfQ.Q6pUH5-yo0FsfUAyFNuAR6uY1-IvAsoY5w6QgHSDzsY';
export const supabase= createClient(supabaseUrl,supabaseKey);