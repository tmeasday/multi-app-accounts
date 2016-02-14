if (Meteor.isClient) {

  Meteor.loginWithPassword({username: 'username'}, 'password');

  const app2 = DDP.connect('localhost:3100');
  const token = Accounts._storedLoginToken()
  const accounts2 = new AccountsClient({connection: app2});
  console.log({token});
  accounts2.loginWithToken(token, (e) => {
    console.log(accounts2.user());  
  });
}
