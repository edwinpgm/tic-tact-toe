import React from 'react'

interface PropsTab {
  label?: string
  onChange?: (e: React.MouseEvent) => void
}

const Tab: React.FC<PropsTab> = ({ label, onChange }) => {
  return (
    <button onClick={onChange}>{label}</button>
  )
}

interface TabType {
  id: string
}

interface Props {
  options: [TabType]
  onChange: (id: string) => void
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
