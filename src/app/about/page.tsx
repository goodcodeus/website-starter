import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A Header",
  description: "A description",
};

export default function Page() {
  return (
    <>
      <h1>About</h1>
    </>
  );
}