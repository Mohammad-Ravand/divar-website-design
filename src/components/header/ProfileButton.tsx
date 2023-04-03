import React from "react";

type Props = {};

const ProfileButton = (props: Props) => {
  return (
    <div className="relative">
      <div className="fixed bg-purple z-20 h-3/4 w-1/2 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm">
        <button>Close me</button>

        <h3>
        ecati quas. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. At h
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas
        omnis nemo quas minima quam, repudiandae doloremque. Sunt magnam officia</p>
        <p>voluptatibus nostrum eligendi dignissimos minima itaque, praesentium
        corrupti obcaarum id magni consequuntur ratione aperiam! Quasi
        animi sunt molestiae eos a voluptatem exercitationem voluptate quo,
        consectetur fugit tempore impedit qui! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ea quae dolor maiores animi dolores
        deleniti laborum quis molestias nulla, reprehenderit eos odio recusandae
        consectetur velit saepe explicabo quibusdam quidem? Corrupti.</p>
      </div>
    </div>
  );
};

export default ProfileButton;
