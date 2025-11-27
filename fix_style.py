
import os

file_path = r'c:\Users\hp\Desktop\repo copy\src\style.css'

with open(file_path, 'r') as f:
    lines = f.readlines()

# Find the start of .tech-icons
start_index = -1
for i, line in enumerate(lines):
    if '.tech-icons {' in line and 'display: flex' in lines[i+1]:
        start_index = i
        break

# Find the start of Resume section (which is safe)
end_index = -1
for i, line in enumerate(lines):
    if '/* Resume */' in line:
        end_index = i - 1 # Go back a bit to include the comment start
        break

if start_index != -1 and end_index != -1:
    # Keep top part
    new_content = lines[:start_index]
    
    # Insert fixed content
    fixed_middle = """.tech-icons {
  display: flex !important;
  align-self: center !important;
  justify-content: center !important;
  font-size: 1rem !important;
  margin: 15px !important;
  padding: 10px 20px !important;
  opacity: 0.93 !important;
  outline: 1.7px solid rgba(200, 137, 230, 0.637) !important;
  vertical-align: middle !important;
  text-align: center !important;
  border-radius: 24px !important;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137) !important;
  overflow: hidden !important;
  transition: all 0.4s ease 0s !important;
  width: fit-content !important;
  cursor: pointer !important;
  transition: outline-color 0.3s, outline-width 0.3s, transform 0.3s;
  color: white;
  animation: floatTech 4s ease-in-out infinite;
}

.tech-icons:nth-child(2n) {
  animation-delay: 0.5s;
}

.tech-icons:nth-child(3n) {
  animation-delay: 1s;
}

.tech-icons:nth-child(4n) {
  animation-delay: 1.5s;
}

.tech-icons:nth-child(5n) {
  animation-delay: 2s;
}

.tech-icons-text {
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
}

@media (max-width: 767px) {
  .tech-icons {
    margin: 10px !important;
  }
}

.tech-icons:hover {
  transform: scale(1.05) !important;
  overflow: hidden !important;
  outline: 2.2px solid rgba(197, 115, 230, 0.883) !important;
}

@keyframes floatTech {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

.quote-card-view {
  border: none !important;
  color: white !important;
  background-color: transparent !important;
}

.about-activity {
  list-style: none !important;
  text-align: left !important;
  padding-left: 1px !important;
}

@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;
    border-radius: 10px !important;
  }
}

.about-img img {
  border-radius: 10px;
  box-shadow: 0 0 20px #b562d6, 0 0 40px #b562d6, 0 0 60px #b562d6, 0 0 80px #b562d6;
  animation: floatImage 4s ease-in-out infinite;
  transition: all 0.3s ease;
}

.about-img img:hover {
  box-shadow: 0 0 30px #c770f0, 0 0 60px #c770f0, 0 0 90px #c770f0, 0 0 120px #c770f0;
}

@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

"""
    # Add fixed middle
    new_content.append(fixed_middle)
    
    # Add bottom part (Resume onwards)
    new_content.extend(lines[end_index:])
    
    with open(file_path, 'w') as f:
        f.writelines(new_content)
    print("Successfully fixed style.css")
else:
    print(f"Could not find start/end indices. Start: {start_index}, End: {end_index}")
