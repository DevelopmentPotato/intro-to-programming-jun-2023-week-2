namespace ShoppingApi.Data;

public class StatusEntity
{
    public int id { get; set; }
    public string Message { get; set; } = string.Empty;
    public DateTimeOffset LastChecked { get; set; }
}
