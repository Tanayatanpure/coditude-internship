const users = [
    {
      id: 2,
      name: "Jonathon Haley",
      username: "Monte.Weber2",
      email: "Daphne43@yahoo.com",
      phone: "1-563-675-1857 x11708",
      website: "carmela.net",
      password: "hashed_password",
      ages: 34
    },
    {
      id: 3,
      name: "Dean John",
      username: "dd.1",
      email: "deno@google.com",
      phone: "1-123-543-1857 123212",
      website: "dd.net",
      password: "Dean_hashed_password",
      ages: 23
    }
  ];
  
  function addLast(users, temp) {
    return [...users, temp];
  }
  
  const newRecord = {
    id: 4,
    name: "tanaya",
    username: "tanaya123",
    email: "tanaya@google.com",
    phone: "1-234-567-8901",
    website: "example.com",
    password: "new_hashed_password",
    ages: 22
  };
  
  const updatedUsers = addLast(users, newRecord);
  console.log(updatedUsers);
  