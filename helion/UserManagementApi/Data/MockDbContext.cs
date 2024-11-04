using System.Collections.Generic;
using System.Linq;
using UserManagementApi.Models;

namespace UserManagementApi.Data
{
    public class MockDbContext
    {
        public List<User> Users { get; set; }

        public MockDbContext()
        {
            Users = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "john@example.com" },
                new User { Id = 2, Name = "Jane Doe", Email = "jane@example.com" }
            };
        }

        public User GetUser(int id) => Users.FirstOrDefault(u => u.Id == id);
        public List<User> GetAllUsers() => Users;
        public void AddUser(User user) => Users.Add(user);
        public void UpdateUser(User user) 
        {
            var existingUser = GetUser(user.Id);
            if (existingUser != null) 
            {
                existingUser.Name = user.Name;
                existingUser.Email = user.Email;
            }
        }
        public void DeleteUser(int id) => Users.RemoveAll(u => u.Id == id);
    }
}

