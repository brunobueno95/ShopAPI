using ShopAPI.Model;

namespace ShopAPI
{
    public class Admin :Person, IAdmin
    {
        

        public Admin(string N, string Id, string P) : base(N, Id, P) 
        {
            name = N;
            id = Id;
            password = P;
        }

    }
}
