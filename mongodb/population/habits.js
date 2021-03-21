// colors : ['#EBEE89', '#EE9FD3', '#8497E8', '#66F2E4', '#F08D8F']

const habit1 = {
  name: "Exercise",
  color: "#EBEE89",
  availability: [true, true, true, true, true, true, true],
  currentTarget: 4,
  records: [
    {
      week: 10,
      year: 2021,
      record: [false, false, true, false, true, false, false],
      weeksTarget: 4,
    },
    {
      week: 11,
      year: 2021,
      record: [true, false, true, false, true, false, false],
      weeksTarget: 4,
    },
  ],
};
const habit2 = {
  name: "Read for 30 mins",
  color: "#EE9FD3",
  availability: [true, true, true, true, true, true, true],
  currentTarget: 5,
  records: [
    {
      week: 10,
      year: 2021,
      record: [true, true, true, false, true, false, false],
      weeksTarget: 4,
    },
    {
      week: 11,
      year: 2021,
      record: [true, false, true, false, true, true, true],
      weeksTarget: 4,
    },
  ],
};
const habit3 = {
  name: "Call friends",
  color: "#8497E8",
  availability: [false, false, false, true, true, true, true],
  currentTarget: 2,
  records: [
    {
      week: 10,
      year: 2021,
      record: [false, false, false, false, false, true, false],
      weeksTarget: 4,
    },
    {
      week: 11,
      year: 2021,
      record: [false, false, false, false, true, true, true],
      weeksTarget: 4,
    },
  ],
};

module.exports = [habit1, habit2, habit3];
