//another way of declaring function
exports.getDate = function (){
  const today = new Date();
  const curDay = today.getDay();
  // var day = "";
  const type = "";

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = getDay;

function getDay(){
  const today = new Date();
  const curDay = today.getDay();
  // var day = "";
  const type = "";

  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
}
