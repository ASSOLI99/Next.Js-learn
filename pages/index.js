import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "some address 1, 12345 some city",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    address: "some address 2, 12345 some city",
    description: "this is a second meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalData: 3600,
  };
}
export default HomePage;
