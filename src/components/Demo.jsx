const Demo = () => {
  return (
    <div className="mt-2 grid gap-8 md:grid-cols-2">
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1669689971484-171a3db9844b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="img"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium mb-2">heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          accusamus quos assumenda nam soluta officiis sunt voluptate dolor
          omnis consequuntur unde eligendi delectus, rerum dignissimos alias!
          Distinctio deleniti itaque accusamus.
        </p>
      </div>
    </div>
  );
};

export default Demo;
