@Test
public void UserDB() {
 UserDatabase mockDb = new UserDatabase() {
 public boolean verify(String name, String password) {
 assertEquals("myname", name);
 assertEquals("mypassword", password);
 return true;
 }
@Test
public void UserService() {
  Response hwResponse = true;

  expect(userDaoMock.Call().andReturn(hwResponse);

  reploy();

  UserResponseCode response = userService.register(user);

  assertEquals(UserResponseCode.OK, response);
}
