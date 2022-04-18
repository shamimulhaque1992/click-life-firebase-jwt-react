import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Accordion
        className="w-75 mx-auto pt-4 mt-4 pb-4 mb-4"
        defaultActiveKey={["0"]}
        alwaysOpen
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference Between Authentication and Authorization.
          </Accordion.Header>
          <Accordion.Body>
            In simple words the main difference between authorization and
            authentication is the permision to do some action. <br />
            Mainly when we say authentication we think about verify a particular
            person whether it's he/she or not. <br />
            On the other hand, when we talk about authorization we think about
            giving some access to the particular user who have been
            authenticated. <br />
            By definition Authentication is the process or action of proving or
            showing something to be true, genuine, or valid. <br />
            And Authorization is the process of giving someone the ability to
            access a resource.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why we use firebase database and what are the alternatives?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is a toolset to “build, improve, and grow your app”, and
            the tools it gives you cover a large portion of the services that
            developers would normally have to build themselves, but don’t really
            want to build, because they’d rather be focusing on the app
            experience itself. This includes things like analytics,
            authentication, databases, configuration, file storage, push
            messaging, and the list goes on. The services are hosted in the
            cloud, and scale with little to no effort on the part of the
            developer. <br></br>
            <strong>Alternatives:</strong> Oracle Database, DataStax
            Enterprise, Redis Enterprise Cloud, Cloudera Enterprise Data Hub,
            Db2. MarkLogic, Couchbase Server, Neo4j, etc.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Other than authentication, what else can we do using firebase database?{" "}
          </Accordion.Header>
          <Accordion.Body>
            <strong>Firebase Realtime Database:</strong> The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.<br></br>
            
            <br></br>
            <strong>Cloud Firestore:</strong>
            Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions.{" "}
            <br></br>
            
            <br></br>
            <strong>Hosting:</strong>
            Firebase Hosting is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network). You can also pair Firebase Hosting with Cloud Functions or Cloud Run to build and host microservices on Firebase.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
