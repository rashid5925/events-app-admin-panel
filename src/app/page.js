import Login from './components/loginForm'
import Dashboard from './dashboard/page';

export default function Home() {
  let user = true;
  if (!user) {
    return (
      <Login></Login>
    )
  } else {
    return (<Dashboard></Dashboard>)
  }
}
