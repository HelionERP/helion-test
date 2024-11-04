using System.Collections.Generic;
using UserManagementApi.Models;
using UserManagementApi.Repositories;

namespace UserManagementApi.Services
{
    public class UserService
    {
        private readonly UserRepository _repository;

        public UserService(UserRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<User> GetAllUsers() => _repository.GetAllUsers();
        public User GetUser(int id) => _repository.GetUser(id);
        public void AddUser(User user) => _repository.AddUser(user);
        public void UpdateUser(User user) => _repository.UpdateUser(user);
        public void DeleteUser(int id) => _repository.DeleteUser(id);
    }
}

