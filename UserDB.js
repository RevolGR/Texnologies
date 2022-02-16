@Test
public void UserDB() {
 UserDatabase mockDb = new UserDatabase() {
 public boolean verify(String name, String password) {
 assertEquals("myname", name);
 assertEquals("mypassword", password);
 return true;
 }
