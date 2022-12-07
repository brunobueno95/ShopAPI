using ShopAPI.Model;
using System;

namespace ShopAPI
{
    public class Shop 
    {
         public IAdmin _admin { get; private set; }

        public double profit { get; set; }

        public List<Customer> allcustomers { get; set; }
        public List<AdminItem> allitems { get; set; }

        public List<int> itemssold { get; set; }

      

        public Shop(IAdmin admin)
        {
            _admin = admin;
            allitems= new List<AdminItem>();
            allcustomers = new List<Customer>();
            
            itemssold= new List<int>();
            profit=0;
        }

        
    }

  
}
