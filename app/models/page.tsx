"use client";

import Logo from "@/public/logo";

const images = [
  {
    url: "https://r2-us-west.photoai.com/1738946849-9d07d9e10a76f7274171064eabc825d8-3.png",
    // title: "Nature Valley",
    height: "h-[400px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1735428836-6c9afb9707e4a2596635c6ac8e8ee1e0-4.png",
    // title: "Forest Lake",
    height: "h-[300px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738955439-fd1fc2636b3b3ee2942ce2e73a24fa83-2.png",
    // title: "Waterfall",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1732837912-76b2c1e2d61d7ed99cc6a3c1188864ce-2.png",
    // title: "Mountain Range",
    height: "h-[350px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1735270394-11e1d3fe8924d14d6c88c5f7aab7ad73-3.png",
    // title: "Forest Path",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1725081260-5f795e01f43888b650c31fb94b1e42cf-1.png",
    // title: "Mountain Peak",
    height: "h-[400px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1737912315-49170d1b6e397f4e0b740218ae3e453d-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1725070521-8dbe2be1bac72901a5edf8e05e272a92-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726233490-ea879283f80a9da1313781e34246e940-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1739132593-672d356d3b94dd2f2227b93ba5755295-4.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726189625-2f1cc32871d04a87672f996ef885ef23-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726189457-4b6c76fb81b18acb060d78309971692f-3.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738946996-69fbe5f252efa6190771ecb234625611-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738955392-fddd9f7db47f2ece350f3971e5bf703c-3.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738449236-1fadc5920cf58671e6fe4e15186e1936-2.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1743546265-0b92a9e346fffc800b904209180ca576-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726224726-b0828339f1d2cb2df05f41f7c7f249bf-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726612725-9dcde64051c7caa82083d4028c9f840a-1.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726187376-cdbba2944958ff8c547884d0dda4abb0-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726226827-370d20baaca21c1c55e099dcf32e5697-4.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1743292801-58d803340254ab264c5b8ce116895247-2.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738956827-0ca385eb396e61f48b08938ccf8f8337-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726187376-cdbba2944958ff8c547884d0dda4abb0-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1737912315-49170d1b6e397f4e0b740218ae3e453d-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1729187231-8d8b565a9f238d5ae83059154ba8e454-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738947101-b18660fc90c234b164bb39fca74d855d-2.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726237252-121f90e260f19ed71b47c79b1e04dff1-4.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726660255-3f62acb07228e96e1308a57e06d42e54-3.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1725075502-507241195a7abd62206808052e2d9e97-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726231724-3ff7eb27a6c39b8bfe12bbebda509e5c-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726228593-87f963bca6562cfc361b1cdfc9f5bade-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726230232-3d9d2566f04cfbdfc302c9284a149dfd-2.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1725073001-2fb841ae54cae07f0f9a5fe2c72e6752-1.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726231514-b33d8613811061fcc7ad6950dd017b22-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738959239-5afc17c4ac18d97b173f12fc03133586-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738959155-a9a189174c2b0b5f4de011d47b6b51fb-4.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726223338-0abda11ea94e22152fe4bc157457efd6-3.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726224158-80d001835e455fff96c81947ccccd685-4.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726141846-a1328e3e807889304518195cd245894a-3.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1738946996-69fbe5f252efa6190771ecb234625611-1.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726572965-dc45e7086aae3cdff22ad9006a293519-1.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1726572839-6b5dc218760686e16ba07d32c276db6d-1.png",
    // title: "Northern Lights",
    height: "h-[500px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1729189943-f6e1b2a3a3cc6100e73eda0289bd47eb-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1737912319-edc8ef794b48f47a84ae96e95f957cb9-2.png",
    // title: "Northern Lights",
    height: "h-[380px]",
  },
  {
    url: "https://r2-us-west.photoai.com/1737912317-bb25abebb98a8c9c68ee05080e9d1f4e-4.png",
    // title: "Northern Lights",
    height: "h-[450px]",
  }
];

export default function NatureGallery() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-2xl font-bold text-black">photogenai</h1>
        </div>
        <p className="text-gray-400 cursor-pointer">A collection of ai generated images</p>
      </header>

      <main className="container mx-auto px-6 pb-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-xl overflow-hidden group relative cursor-pointer"
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt="img"
                className={`w-full ${image.height} object-cover transition-transform duration-300 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
