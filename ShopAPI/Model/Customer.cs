using ShopAPI.Model;
using System.ComponentModel;
using System.Security.Principal;

namespace ShopAPI
{
    public class Customer : Person
    {
        

        public List<Iitem> itemsbought { get; set; }


        public List<IAccount>  account { get; set; }

        public Customer(string name, string id, string password) : base(name, id, password)
        {
            this.name = name;
            this.id = id;
            this.password = password;
            this.itemsbought = new List<Iitem>();
            account = new List<IAccount>();
        }
    }
}
