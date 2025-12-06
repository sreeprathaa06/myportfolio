
# Constants
TOTAL_DURATION = 90  # seconds (increased to accommodate pauses)
PAUSE_DURATION = 2.5 # seconds
PAUSE_PERCENT = (PAUSE_DURATION / TOTAL_DURATION) * 100

# Achievement Positions (Distance %)
STOPS = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88]

# Generate Keyframes
def generate_keyframes():
    print("/* Generated Keyframes for 90s Duration with ~2.5s Pauses */")
    
    # 1. autoScroll (TranslateX)
    # Maps Time % -> TranslateX value
    # Logic: 
    # Start: 15vw
    # End: calc(15vw - 3200px)
    # Total Distance: 3200px
    # Dist % maps to TranslateX: 15vw - (3200 * dist/100)
    
    print("\n@keyframes autoScroll {")
    print("  0% { transform: translateX(15vw); }")
    
    current_time = 0
    current_dist = 0
    
    # Calculate travel time between stops
    # Total travel distance = 100%
    # Total travel time = 100% - (11 stops * PAUSE_PERCENT)
    total_travel_time_percent = 100 - (len(STOPS) * PAUSE_PERCENT)
    
    for stop in STOPS:
        # Travel to stop
        dist_traveled = stop - current_dist
        time_needed = (dist_traveled / 100) * total_travel_time_percent
        
        arrival_time = current_time + time_needed
        
        # Arrive at stop
        print(f"  {arrival_time:.2f}% {{ transform: translateX(calc(15vw - {stop/100 * 3200}px)); }}")
        
        # Pause at stop
        departure_time = arrival_time + PAUSE_PERCENT
        print(f"  {departure_time:.2f}% {{ transform: translateX(calc(15vw - {stop/100 * 3200}px)); }}")
        
        current_time = departure_time
        current_dist = stop
        
    # Finish line
    print("  100% { transform: translateX(calc(15vw - 3200px)); }")
    print("}")


    # 2. travelRoad (Offset Distance)
    # Maps Time % -> Offset Distance %
    print("\n@keyframes travelRoad {")
    print("  0% { offset-distance: 0%; }")
    
    current_time = 0
    current_dist = 0
    
    for stop in STOPS:
        dist_traveled = stop - current_dist
        time_needed = (dist_traveled / 100) * total_travel_time_percent
        
        arrival_time = current_time + time_needed
        
        # Arrive
        print(f"  {arrival_time:.2f}% {{ offset-distance: {stop}%; }}")
        
        # Pause
        departure_time = arrival_time + PAUSE_PERCENT
        print(f"  {departure_time:.2f}% {{ offset-distance: {stop}%; }}")
        
        current_time = departure_time
        current_dist = stop
        
    print("  100% { offset-distance: 100%; }")
    print("}")
    
    
    # 3. Reveal Animations
    # Each item needs to reveal EXACTLY when the avatar arrives (arrival_time)
    print("\n/* Reveal Animations */")
    
    current_time = 0
    current_dist = 0
    
    for i, stop in enumerate(STOPS):
        dist_traveled = stop - current_dist
        time_needed = (dist_traveled / 100) * total_travel_time_percent
        arrival_time = current_time + time_needed
        
        # Reveal slightly before arrival (e.g. 1% earlier) for smoothness
        reveal_start = max(0, arrival_time - 2)
        reveal_end = arrival_time
        
        print(f"\n/* Item {i+1} at {stop}% */")
        print(f".item-{i+1} .roadmap-card {{ animation-name: revealItem{i+1}; }}")
        print(f"@keyframes revealItem{i+1} {{")
        
        # Alternating Y offset
        y_offset = "20px" if (i+1) % 2 != 0 else "-20px"
        
        print(f"  0%, {reveal_start:.2f}% {{ opacity: 0; transform: translateY({y_offset}) scale(0.8); }}")
        print(f"  {reveal_end:.2f}%, 100% {{ opacity: 1; transform: translateY(0) scale(1); }}")
        print("}")
        
        current_time = arrival_time + PAUSE_PERCENT
        current_dist = stop

generate_keyframes()
