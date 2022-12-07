using System.Security.Principal;

namespace ShopAPI
{
    public class Account : IAccount
    {
        public string cardType { get; set; }

        public string cardNumber { get; set; }

        public string cvc { get; set; }

        public string img { get; set; }

        public bool chosen { get; set; }

        public string name { get; set; }

        public Account(string cardType, string cardNumber, string cvc, string img, bool chosen, string name)
        {
            this.cardType = cardType;
            this.cardNumber = cardNumber;
            this.cvc = cvc;
            this.img = img;
            this.chosen = chosen;
            this.name = name;
        }
    }

    
}
