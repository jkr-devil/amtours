import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://yyampxivhoaeubunnjnq.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YW1weGl2aG9hZXVidW5uam5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3MzM0NjAsImV4cCI6MjA4MjMwOTQ2MH0.zH_ZsNusH_LNYYMbP7PlcTs5sQ-c2qPGn12LSNqeo0A";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
