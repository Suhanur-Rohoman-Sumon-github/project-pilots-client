import UserCompo from "../UserCompo/UserCompo"

const User = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-pink-500 grid lg:grid-cols-4 grid-cols-2 justify-between gap-10 items-center p-10 rounded-xl">
      <UserCompo title="100+" paragraph="Countries"/>
      <UserCompo title="10M+" paragraph="User"/>
      <UserCompo title="99%" paragraph="Efficiency"/>
      <UserCompo title="4.7" paragraph="Rating"/>
    </div>
  )
}

export default User
