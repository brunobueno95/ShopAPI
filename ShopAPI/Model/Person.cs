namespace ShopAPI.Model
{
    public abstract class Person
    {
        public string name { get; set; }
        public string id { get; set; }

        public string password { get; set; }
        public Person(string name, string id, string password)
        {
            this.name = name;
            this.id = id;
            this.password = password;
        }
    }
}
