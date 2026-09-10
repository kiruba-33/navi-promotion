export const iconWrapperAnimation = `
  relative
  w-14
  h-14
  rounded-full
  bg-white/15
  backdrop-blur-md
  border
  border-white/20

  flex
  items-center
  justify-center

  mb-5

  transition-all
  duration-500

  group-hover:rotate-12
  group-hover:scale-110
`;

export const iconRingAnimation = `
  absolute
  inset-0
  rounded-full

  border
  border-white/30

  opacity-0

  group-hover:opacity-100
  group-hover:scale-125

  transition-all
  duration-500
`;

export const iconAnimation = `
  w-6
  h-6
  text-white

  transition-all
  duration-500

  group-hover:rotate-[360deg]
`;