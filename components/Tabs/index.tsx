import React from 'react'

const Tab = ({label, onChange}) => {
  return (
    <button onClick={onChange}>{label}</button>
  )
}

export const Tabs = ({options, onChange}) => {
  return (
    <div>
      {options.map(item => (
        <Tab
          {...item}
          key={item.id}
          onChange={() => onChange(item.id)}
        />
      ))}
    </div>
  )
}
