using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UserManagementApi.Models;
using UserManagementApi.Services;

namespace UserManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _service;

        public UserController(UserService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers() => Ok(_service.GetAllUsers());

        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id) => _service.GetUser(id) is User user ? Ok(user) : NotFound();

        [HttpPost]
        public ActionResult AddUser(User user)
        {
            _service.AddUser(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateUser(int id, User user)
        {
            if (id != user.Id) return BadRequest();
            _service.UpdateUser(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            _service.DeleteUser(id);
            return NoContent();
        }
    }
}

