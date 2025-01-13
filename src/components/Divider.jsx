import Image from 'next/image';

const Divider = () => {
  return (
    <div className="w-full flex items-center justify-center my-8">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </div>
  );
};

export default Divider;
