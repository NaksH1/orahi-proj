import InterviewOptionsPanel from './InterviewOptionsPanel';
import ModelResponsePanel from './ModelResponsePanel';
import UserRequestPanel from './UserRequestPanel';
import 'src/styles/homeStyles.css'

const Main = () => {
  return (
    <main className="flex flex-col items-center sm:items-start gap-12 w-full fontStyle">
      <InterviewOptionsPanel />
      <div className="flex flex-col items-center gap-20 sm:gap-14 w-full">
        <UserRequestPanel />
        <ModelResponsePanel />
      </div>
    </main>
  );
};

export default Main;
