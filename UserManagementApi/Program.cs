using UserManagementApi.Data;
using UserManagementApi.Models;
using UserManagementApi.Services;
using UserManagementApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSingleton<MockDbContext>();
builder.Services.AddSingleton<UserRepository>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();
app.Run();

