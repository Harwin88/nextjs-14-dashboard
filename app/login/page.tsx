import Form from '@/app/ui/login-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'Home',
            href: '/',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}