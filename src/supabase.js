import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://wqzlilmuhqxqcfahgjfv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemxpbG11aHF4cWNmYWhnamZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTIyNzMwOSwiZXhwIjoyMDk2ODAzMzA5fQ.O_3PPP0_oJdMm0BSGX0BE16-9TGIiKjdQreAW8uhwKc")

export default supabase