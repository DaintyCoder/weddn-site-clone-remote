// Import Link component from Next.js for client-side transitions between routes
import Link from 'next/link';
// Import the Layout component to use for page layout consistency
import Layout from '../components/Layout';

// Define the AboutPage component as a functional component
const AboutPage = () => (
  // Use the Layout component to wrap the content of the About page
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1> {/* Heading of the About page */}
    <p>This is the about page</p> {/* Description text for the About page */}
    <p>
      {/* Link component to enable navigation back to the homepage */}
      <Link href="/">
        Go home {/* Anchor tag for the link */}
      </Link>
    </p>
  </Layout>
);

// Export the AboutPage component as the default export of this module
export default AboutPage;
