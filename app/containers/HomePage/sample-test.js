import React from 'react';

const MyTableCompoent = () => (
  <table className="vitamins">
    <thead>
      <tr>
        <th>Vitamin</th>
        <th>Classification</th>
        <th>Sources</th>
        <th>Adequate Intake (AI)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A</td>
        <td>fat-soluble</td>
        <td>Dark-colored fruit</td>
        <td>3,000 IU/day</td>
      </tr>
      <tr>
        <td>B</td>
        <td>water-soluble</td>
        <td>Lean meats</td>
        <td>1 mcg/day</td>
      </tr>
      <tr>
        <td>B 1</td>
        <td>water-soluble</td>
        <td>Lean meats</td>
        <td>2.2 mcg/day</td>
      </tr>
      <tr>
        <td>B 6</td>
        <td>water-soluble</td>
        <td>Nuts</td>
        <td>1.7 mg/day</td>
      </tr>
      <tr>
        <td>B 12</td>
        <td>water-soluble</td>
        <td>Meat</td>
        <td>2.4 mcg/day</td>
      </tr>
      <tr>
        <td>C</td>
        <td>water-soluble</td>
        <td>Broccoli</td>
        <td>90 mg/day</td>
      </tr>
      <tr>
        <td>D</td>
        <td>fat-soluble</td>
        <td>Fish</td>
        <td>600 IU/day</td>
      </tr>
      <tr>
        <td>E</td>
        <td>fat-soluble</td>
        <td>Avocado</td>
        <td>33 IU/day</td>
      </tr>
      <tr>
        <td>K</td>
        <td>fat-soluble</td>
        <td>Cabbage</td>
        <td>120 mcg/day</td>
      </tr>
    </tbody>
  </table>
);

export default MyTableCompoent;
