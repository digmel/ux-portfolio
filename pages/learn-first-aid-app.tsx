import {
  Layout,
  ProjectHero,
  Section,
  SectionHeader,
  Text,
  ProjectFinal,
} from "../components";
import Image from "next/image";

const prototypeURL = "https://bit.ly/learn-first-aid";

export default function Page() {
  return (
    <Layout title="Project | Learn First Aid">
      <div className="md:mt-16">
        <ProjectHero
          title="Learn First Aid"
          subtile="App allows people to refresh their First Aid knowledge with simple illustrated fun exam"
          coverImage="first-aid-hero"
          buttonLabel="View Prototype"
          navigationURL={prototypeURL}
        />

        <Text variant="title">Project Overview</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Background"
            body="The app is designed for people who are interested in first-aid. The First Aid app will teach you how to handle yourself and injured people and how to behave during floods, earthquakes, and other natural disasters. The app aims to provide useful information and make the learning process easier and pleasurable."
            className="basis-1/3 mt-8"
          />

          <Section
            title="My Role & Responsibilities"
            body="Product Designer & UX Researcher"
            list={[
              "Conducting interviews & usability studies",
              "Digital wireframing",
              "Accounting for accessibility,",
              "Iterating on designs",
              "Information architecture.",
            ]}
            finalText="6 Weeks"
            className="basis-1/3 mt-8"
          />

          <Section
            title="The Goal"
            body="Develop a solution that helps people learn how to handle injuries or natural disasters."
            className="basis-1/3 mt-8"
          />
        </div>

        <Text variant="title" className="mt-16">
          Understanding the User
        </Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Research"
            body="I've conducted user interviews and got lots of insights. Most interview participants reported that they don't have enough information about first aid, and never had the opportunity to learn. The feedback received through research made it clear, that users are willing to get basic information on how to behave during an emergency if they had an easy-to-use tool to help them."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Problem Statement #1"
            body="Based on the research insights I’ve created 2 personas and problem statements:"
            finalText="Stella is a part-time graphic designer and mom, who needs to find a platform that she will use in teaching her kid first aid."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Problem Statement #2"
            body="Based on the research insights I’ve created 2 personas and problem statements:"
            finalText="Jennifer is a full-time student who needs an app that teaches her how to handle emergencies to get used to living alone."
            className="basis-1/3 mt-8"
          />
        </div>

        <SectionHeader title="Persona #1" />

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <div className="basis-1/3">
            <Image
              src={`/assets/first-aid-persona1.png`}
              width={300}
              height={278}
              alt="1"
              quality={100}
            />

            <div className="mt-4 pr-12">
              <Text variant="subtitle">Stella, 32</Text>
              <Text variant="body">
                Lives in Tbilisi with 8 y/o daughter, has BA degree in
                marketing.
              </Text>
            </div>
          </div>

          <Section
            title="About"
            body="Stella has many responsibilities on a daily basis. She takes care of a daughter and works as a graphic designer part-time, she works mostly from home but goes into the office occasionally. Stella loves to travel, draw, read books, and loves her husband and 8-years-old kid."
            finalText="Stella constantly cares about her child’s safety, but often has to deal with childhood injuries. Stella wants to teach her daughter how to behave if she falls down in the yard or cuts her hand. She needs her daughter to be prepared for emergencies."
            className="basis-1/3 md:mt-0 mt-8"
          />

          <div className="basis-1/3 md:-mt-2 mt-8 flex flex-col">
            <Section
              title="Goals"
              list={[
                "To teach her 8 years old girl the basics of the first aid.",
                "To find a way to learn first aid.",
                "Be prepared for emergencies",
              ]}
              className="basis-1/3 "
            />

            <Section
              title="Frustrations"
              list={[
                "There are no platforms that can be used when teaching first aid to a daughter.",
                "Lots of people who don't know how to behave in an emergency, which makes Stella feel unsafe.",
              ]}
              className="basis-1/3 mt-4"
            />
          </div>
        </div>

        <SectionHeader title="Persona #2" />

        <div className="md:mt-4 md:mb-24 flex md:flex-row flex-col">
          <div className="basis-1/3">
            <Image
              src={`/assets/first-aid-persona2.png`}
              width={300}
              height={278}
              alt="1"
              quality={100}
            />

            <div className="mt-4 pr-12">
              <Text variant="subtitle">Jennifer, 19</Text>
              <Text variant="body">
                Lives alone in Tbilisi, pursuing a bachelors degree in business
                administration.
              </Text>
            </div>
          </div>

          <Section
            title="About"
            body="Jennifer is a full-time student who has just moved to another city for the university. She lived very comfortably with her parents, and it was quite difficult to leave the hometown. She has never lived alone before and has no such experience, it all causes her anxiety."
            finalText="''I do not even know what to do during an earthquake and I always think about it which is annoying'' - says Jennifer After moving in alone she began looking for information about first aid and how to prepare for emergencies. It is not easy to find that kind of information she needs."
            className="basis-1/3 md:mt-0 mt-8"
          />

          <div className="basis-1/3 md:-mt-2 mt-8 flex flex-col">
            <Section
              title="Goals"
              list={[
                "To become a strong and independent.",
                "To be prepared for the exams ",
                "To get used to living alone peacefully",
              ]}
              className="basis-1/3 "
            />

            <Section
              title="Frustrations"
              list={[
                "Studying and living alone in another city without parents is quite difficult.",
                "Worries about how to deal with emergencies",
                "All the responsibilities are on her",
              ]}
              className="basis-1/3 mt-4"
            />
          </div>
        </div>

        <Text variant="title">Usability Tests</Text>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Digital Wireframes"
            body="After ideating and drafting digital wireframes, I created the initial designs for the First aid app. These designs focus on delivering personalized guidance to users to help them learn to handle emergencies."
            className="basis-1/3 mt-8"
          />

          <Section
            title="Usability Study Findings"
            body="Low-fidelity prototype were used for moderated usability study. Main findings:"
            list={[
              "People would like to read illustrated articles",
              "Just reading topics won't be interesting",
              "Users need the motivation to use this application.",
            ]}
            className="basis-1/3 mt-8"
          />

          <Section
            title="Insights-based Changes"
            body="Based on the insights from the usability studies, I applied some changes, I’ve added tests section because of the users’ needs."
            finalText="Illustrations make the article interesting and visually appealing. Texts are simplified and easy to read even for the children."
            className="basis-1/3 mt-8"
          />
        </div>

        <div className="mt-8">
          <Image
            src={`/assets/first-aid-usability.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Quiz Feature"
          body="Research made clear that just reading the articles won't be enough to learn about first aid. That's why I have incorporated tests on the app, users can learn easily by doing quizzes. There are 10 random questions in the test and after answering them explanation will appear, if they give the wrong answer there will be a hint, and questions won't go to the next until the correct answer is selected. "
          className=""
        />

        <div className="mt-8">
          <Image
            src={`/assets/first-aid-quiz.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <Section
          title="Articles"
          body="Users of the First Aid App can access lots of useful articles about ways to handle dangerous situations, including floods, earthquakes, and other natural disasters. The second important topic is Injuries, where people will be introduced to different kinds of emergencies such as Anaphylaxis, Asthma or Heart attacks, Fractures, and Diabetes."
          className=""
        />

        <div className="mt-8">
          <Image
            src={`/assets/first-aid-articles.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-8 md:mb-24 flex md:flex-row flex-col">
          <Section
            title="Accessibility Consideration"
            body="This app is designed to be accessible to everyone using:"
            list={[
              "Clear labels for interactive elements that can be read by screen readers",
              "The colors that are specially selected, and the contrast is checked",
              "Headings with different sized text for clear visual hierarchy.",
            ]}
            className="basis-1/3 mt-8"
          />

          <Section
            title="Next Steps"
            list={[
              "Conduct another round of usability studies to get how successful it is",
              "Add more educational resources for users to learn about first aid",
              "Conduct more research to integrate new useful features",
            ]}
            className="basis-1/3 mt-8"
          />

          <div className="mt-8">
            <Image
              src={`/assets/first-aid-steps.png`}
              width={526}
              height={495}
              alt="1"
              quality={100}
            />
          </div>
        </div>

        <SectionHeader title="First Aid App Screens" />

        <div className="mt-8">
          <Image
            src={`/assets/first-aid-screens.png`}
            width={1120}
            height={444}
            alt="1"
            quality={100}
          />
        </div>

        <div className="md:mt-72 mt-24">
          <ProjectFinal navigationURL={prototypeURL} />
        </div>
      </div>
    </Layout>
  );
}
