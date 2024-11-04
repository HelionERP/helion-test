using System.Collections.Generic;
using UserManagementApi.Models;
using UserManagementApi.Data;

namespace UserManagementApi.Repositories
{
    public class UserRepository
    {
        private readonly MockDbContext _context;

        public UserRepository(MockDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAllUsers() => _context.GetAllUsers();
        public User GetUser(int id) => _context.GetUser(id);
        public void AddUser(User user) => _context.AddUser(user);
        public void UpdateUser(User user) => _context.UpdateUser(user);
        public void DeleteUser(int id) => _context.DeleteUser(id);
    }
}

