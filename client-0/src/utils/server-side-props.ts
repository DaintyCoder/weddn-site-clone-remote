import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: { canonical: req.headers.host } };
};