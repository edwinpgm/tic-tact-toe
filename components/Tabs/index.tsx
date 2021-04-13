import React from 'react'

const Tab: React.FC = ({ label, onChange }) => {
  return (
    <button onClick={onChange}>{label}</button>
  )
}

interface Props {
  options: []
  onChange: (string) => void
}

export const Tabs: React.FC<Props> = ({ options, onChange }) => {
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
