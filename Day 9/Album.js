import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>A.R.Rahman</td>
            <td>Roja</td>
          </tr>
          <tr>
            <td scope='row'>Illaya Raja</td>
            <td>Mouna Ragam</td>
          </tr>
          <tr>
            <td scope='row'>Harris Jayaraj</td>
            <td>Ayan</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}