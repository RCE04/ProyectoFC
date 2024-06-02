import RegisterForm from '@/components/register-form'


function page() {
  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-xl font-bold mb-4">Registro</h3>
      <RegisterForm />
    </div>
  )
}

export default page