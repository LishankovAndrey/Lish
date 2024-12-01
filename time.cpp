#include <iostream>
#include <map>
#include <ctime>

int main() {
    std::time_t now = std::time(nullptr);
    std::tm* localTime = std::localtime(&now);

    std::map<std::string, int> timeMap;
    timeMap["Year"] = localTime->tm_year + 1900;
    timeMap["Month"] = localTime->tm_mon + 1;  
    timeMap["Day"] = localTime->tm_mday;
    timeMap["Hour"] = localTime->tm_hour;
    timeMap["Minute"] = localTime->tm_min;
    timeMap["Second"] = localTime->tm_sec;

    for (const auto& pair : timeMap) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
