const About = () => {
  return (
    <>
      <div className=" mt-20 flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl capitalize leading-none tracking-tight font-bold sm:text-6xl">
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title font-bold text-primary-content tracking-widest text-4xl capitalize">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
        temporibus quisquam quidem sit impedit id at exercitationem illo odit,
        odio dolor officiis, neque voluptatum dolorem! Consequatur autem
        explicabo magnam!
      </p>
    </>
  );
};

export default About;
