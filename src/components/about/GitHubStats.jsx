import Image from 'next/image';
import Divider from '../Divider';

const GitHubStats = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const theme = 'transparent'; // Using transparent theme

  // Define base URLs directly to ensure they exist
  const statsBaseUrl = 'https://github-readme-stats.vercel.app/api';
  const streakBaseUrl = 'https://github-readme-streak-stats.herokuapp.com';
  const languagesBaseUrl = 'https://github-readme-stats.vercel.app/api/top-langs';

  // Common parameters for transparent theme
  const commonParams = 'bg_color=00000000&border_color=30363d&title_color=ff69b4&text_color=00ffff&icon_color=ff69b4';

  const statsUrl = `${statsBaseUrl}?username=${username}&show_icons=true&include_all_commits=true&count_private=true&${commonParams}`;
  const streakStatsUrl = `${streakBaseUrl}?user=${username}&background=00000000&border=30363d&stroke=30363d&ring=ff69b4&fire=ff69b4&currStreakNum=00ffff&sideNums=00ffff&currStreakLabel=ff69b4&sideLabels=ff69b4&dates=00ffff`;
  const languagesUrl = `${languagesBaseUrl}?username=${username}&layout=compact&${commonParams}`;

  return (
    <>
      <Divider />
      <div className="flex flex-col gap-8 items-center justify-center w-full my-8">
        <div className="w-full">
          <Image
            src={statsUrl}
            alt="GitHub Stats"
            width={495}
            height={195}
            className="w-full"
            unoptimized={true}
          />
        </div>
        <Divider />
        <div className="w-full">
          <Image
            src={streakStatsUrl}
            alt="GitHub Streak Stats"
            width={495}
            height={195}
            className="w-full"
            unoptimized={true}
          />
        </div>
        <Divider />
        <div className="w-full">
          <Image
            src={languagesUrl}
            alt="Top Languages"
            width={495}
            height={195}
            className="w-full"
            unoptimized={true}
          />
        </div>
        <Divider />
      </div>
    </>
  );
};

export default GitHubStats;
