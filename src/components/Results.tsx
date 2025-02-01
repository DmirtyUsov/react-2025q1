import React, { ReactNode } from 'react';
import { Person } from '../models';

export default class Results extends React.Component<{ results: Person[] }> {
  render(): ReactNode {
    if (this.props.results.length === 0) {
      return (
        <h3 className="mb-6 text-center text-xl text-slate-900 sm:text-2xl dark:text-white">
          No Entries
        </h3>
      );
    }
    return (
      <table className="w-full text-left text-sm text-gray-500 sm:text-xl rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-sm text-gray-700 uppercase sm:text-xl dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Height
            </th>
            <th scope="col" className="px-6 py-3">
              Mass
            </th>
          </tr>
        </thead>
        <tbody>
          <Rows results={this.props.results} />
        </tbody>
      </table>
    );
  }
}

class Rows extends React.Component<{ results: Person[] }> {
  render(): ReactNode {
    return this.props.results.map((person) => (
      <tr
        key={person.name}
        className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {person.name}
        </th>
        <td className="px-6 py-4">{person.gender}</td>
        <td className="px-6 py-4">{person.height}</td>
        <td className="px-6 py-4">{person.mass}</td>
      </tr>
    ));
  }
}
