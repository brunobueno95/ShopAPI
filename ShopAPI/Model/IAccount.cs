namespace ShopAPI
{
    public interface IAccount
    {
        string cardNumber { get; set; }
        string cardType { get; set; }
        bool chosen { get; set; }
        string cvc { get; set; }
        string img { get; set; }
        string name { get; set; }
    }
}
