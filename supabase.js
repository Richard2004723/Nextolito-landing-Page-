import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://nmouxytgcmhrhuenlmai.supabase.co"; // 🔗 Replace this
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tb3V4eXRnY21ocmh1ZW5sbWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzOTk1NjAsImV4cCI6MjA2Njk3NTU2MH0.1uO3GqgFIg48fJB7lGCjMng35n405rm5qwZR2X_rVXY";         // 🔑 Replace this

export const supabase = createClient(supabaseUrl, supabaseKey);
