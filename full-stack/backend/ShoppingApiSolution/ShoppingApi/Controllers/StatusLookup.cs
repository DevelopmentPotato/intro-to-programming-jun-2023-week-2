namespace ShoppingApi.Controllers;

public class StatusLookup : ILookupTheStatus
{
    public Task<GetStatusResponse> GetCurrentStatusAsync()
    {
        var response = new GetStatusResponse
        {
            Message = "We're Good",
            LastChecked = DateTime.Now.AddMinutes(-9),
        };
        return Task.FromResult(response);
    }
}
