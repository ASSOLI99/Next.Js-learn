import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      address={"some address 1, 12345 some city"}
      description={"this is a first meetup"}
      title={"A First Meetup"}
      image={
        "https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    />
  );
}
export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "this is a first meetup",
        title: "A First Meetup",
        address: "some address 1, 12345 some city",
      },
    },
  };
}
export default MeetupDetails;
